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

        public ImportClientCommandHandler(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }
        public async Task<Unit> Handle(ImportClientCommand request, CancellationToken cancellationToken)
        {
            using (TextFieldParser csvParser = new(request.File.OpenReadStream()))
            {
                csvParser.CommentTokens = new string[] { "#" };
                csvParser.SetDelimiters(new string[] { ";" });
                csvParser.HasFieldsEnclosedInQuotes = true;

                csvParser.ReadLine();

                while (!csvParser.EndOfData)
                {
                    string[] fields = csvParser.ReadFields();

                    var client = MapToClientEntity(fields);

                    await _clientRepository.AddAsync(client, cancellationToken);
                }
            }

            return Unit.Value;
        }

        private static Domain.Models.Client MapToClientEntity(string[] fields)
        {
            return new Domain.Models.Client
            {
                Id = Guid.NewGuid(),
                Name = fields[0]
            };
        }
    }
}
