using API.Contract;
using API.Framework.EventBus;
using AutoMapper;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Application.Process.Commands.Create
{
    public class CreateProcessCommandHandler : ICommandHandler<CreateProcessCommand, Guid>
    {
        private readonly IMapper _mapper;
        private readonly IProcessRepository _processRepository;
        private readonly IClientRepository _clientRepository;
        public CreateProcessCommandHandler(IMapper mapper,
            IProcessRepository processRepository,
            IClientRepository clientRepository)
        {
            _mapper = mapper;
            _processRepository = processRepository;
            _clientRepository = clientRepository;
        }
        public async Task<Guid> Handle(CreateProcessCommand request, CancellationToken cancellationToken)
        {
            var process = _mapper.Map<Domain.Models.Process>(request);
            process.Created = DateTime.Now;
            var id = await _processRepository.AddAsync(process, cancellationToken);

            process.Client.Comments += request.Comments;

            await _clientRepository.Update(process.Client, cancellationToken);

            return id;
        }
    }
}
