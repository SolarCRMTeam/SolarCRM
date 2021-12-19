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
                csvParser.SetDelimiters(new string[] { ";" });
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
                Name = fields[0]
            };
        }
    }
}
