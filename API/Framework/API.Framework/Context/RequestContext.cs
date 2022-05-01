using Microsoft.AspNetCore.Http;
using System;
using System.Linq;

namespace API.Framework.Context
{
    public sealed class RequestContext
    {
        private readonly IHttpContextAccessor _contextAccessor;
        public RequestContext(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }
        public HttpContext HttpContext => _contextAccessor.HttpContext;
        public Guid RepresentativeId
        {
            get
            {
                var user = _contextAccessor.HttpContext.Items.FirstOrDefault(x => x.Key.Equals("User"));

                IUserContext userObject = (IUserContext)user.Value;

                return userObject.Id;
            }
        }
    }
}
