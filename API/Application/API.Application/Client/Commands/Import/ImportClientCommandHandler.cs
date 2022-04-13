using API.Application.Client.Commands.GenerateIdentifier;
using API.Contract;
using API.Framework.EventBus;
using MediatR;
using Microsoft.VisualBasic.FileIO;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Client.Commands.Import
{
    public class ImportClientCommandHandler : ICommandHandler<ImportClientCommand>
    {
        private readonly IClientRepository _clientRepository;
        private readonly IInternalBus _internalBus;

        public ImportClientCommandHandler(IClientRepository clientRepository, IInternalBus internalBus)
        {
            _clientRepository = clientRepository;
            _internalBus = internalBus;
        }
        public async Task<Unit> Handle(ImportClientCommand request, CancellationToken cancellationToken)
        {
            using (TextFieldParser csvParser = new(request.File.OpenReadStream()))
            {
                csvParser.CommentTokens = new string[] { "#" };
                csvParser.SetDelimiters(new string[] { ",", ";" });
                csvParser.HasFieldsEnclosedInQuotes = true;

                csvParser.ReadLine();

                while (!csvParser.EndOfData)
                {
                    string[] fields = csvParser.ReadFields();

                    var client = await MapToClientEntity(fields, cancellationToken);

                    await _clientRepository.AddAsync(client, cancellationToken);
                }
            }

            return Unit.Value;
        }

        private async Task<Domain.Models.Client> MapToClientEntity(string[] fields, CancellationToken cancellationToken)
        {
            var identifier = await _internalBus.SendCommandAsync(new GenerateIdentifierCommand
            {
                ClientType = fields[12]
            });

            return new Domain.Models.Client
            {
                Id = Guid.NewGuid(),
                Identifier = identifier,
                CompanyName = fields[0],
                Name = fields[1],
                Surname = fields[2],
                Place = fields[3],
                Street = fields[4],
                Address = fields[5],
                PostalCode = fields[6],
                Voivodeship = fields[7],
                District = fields[8],
                Mail = fields[9],
                PhoneNumber = fields[10],
                Comments = fields[11],
                ClientType = MapToClientType(fields[12]),
                Created = DateTime.Now
            };
        }

        private static Domain.Enums.ClientType MapToClientType(string fieldValue)
        {
            return fieldValue switch
            {
                "Firma" => Domain.Enums.ClientType.Firma,
                "Prosument" => Domain.Enums.ClientType.Prosument,
                "Rolnik" => Domain.Enums.ClientType.Rolnik,
                _ => Domain.Enums.ClientType.Firma,
            };
        }
    }
}
