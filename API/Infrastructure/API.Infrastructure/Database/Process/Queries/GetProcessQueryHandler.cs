using API.Application.DTO;
using API.Application.Process.Queries;
using API.Framework.EventBus;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Infrastructure.Database.Process.Queries
{
    public class GetProcessQueryHandler : IQueryHandler<GetProcessQuery, ProcessDto>
    {
        private readonly DatabaseContext _databaseContext;
        private readonly IMapper _mapper;

        public GetProcessQueryHandler(DatabaseContext databaseContext, IMapper mapper)
        {
            _mapper = mapper;
            _databaseContext = databaseContext;
        }
        public async Task<ProcessDto> Handle(GetProcessQuery request, CancellationToken cancellationToken)
        {
            var process = await _databaseContext.Process.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (process == null)
            {
                throw new Exception($"Can't find process with id {request.Id}");
            }

            return _mapper.Map<ProcessDto>(process);
        }
    }
}
