using API.Contract;
using API.Framework.EventBus;
using MediatR;
using Microsoft.VisualBasic.FileIO;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Representative.Commands.Import
{
    public class ImportRepresentativeCommandHandler : ICommandHandler<ImportRepresentativeCommand>
    {
        private readonly IRepresentativeRepository _representativeRepository;
        public ImportRepresentativeCommandHandler(IRepresentativeRepository representativeRepository)
        {
            _representativeRepository = representativeRepository;
        }
        public async Task<Unit> Handle(ImportRepresentativeCommand request, CancellationToken cancellationToken)
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

                    var representative = MapToRepresentativeEntity(fields);

                    await _representativeRepository.AddAsync(representative, cancellationToken);
                }
            }

            return Unit.Value;
        }

        private static Domain.Models.Representative MapToRepresentativeEntity(string[] fields)
        {
            return new Domain.Models.Representative
            {
                Id = Guid.NewGuid(),
                Name = fields[0],
                Surname = fields[1],
                Place = fields[2],
                Street = fields[3],
                Address = fields[4],
                PostalCode = fields[5],
                Voivodeship = fields[6],
                District = fields[7],
                Mail = fields[8],
                PhoneNumber = fields[9],
                Comments = fields[10],
                Created = DateTime.Now
            };
        }
    }
}
