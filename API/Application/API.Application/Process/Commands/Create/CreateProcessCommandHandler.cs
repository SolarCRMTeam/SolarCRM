using API.Contract;
using API.Framework.Context;
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
        private readonly RequestContext _requestContext;
        public CreateProcessCommandHandler(IMapper mapper,
            IProcessRepository processRepository,
            IClientRepository clientRepository,
            RequestContext requestContext)
        {
            _mapper = mapper;
            _processRepository = processRepository;
            _clientRepository = clientRepository;
            _requestContext = requestContext;
        }
        public async Task<Guid> Handle(CreateProcessCommand request, CancellationToken cancellationToken)
        {
            var newProcessModel = _mapper.Map<Domain.Models.Process>(request);
            newProcessModel.Created = DateTime.Now;
            newProcessModel.RepresentativeId = _requestContext.RepresentativeId;
            var process = await _processRepository.AddAsync(newProcessModel, cancellationToken);

            process.Client.Comments = CreateNewClientComment(process.Client.Comments, request.Comments);

            await _clientRepository.Update(process.Client, cancellationToken);

            return process.Id;
        }

        private string CreateNewClientComment(string comment, string newPart)
        {
            if(string.IsNullOrEmpty(comment))
                return comment;

            return comment += $" {newPart}";
        }
    }
}
