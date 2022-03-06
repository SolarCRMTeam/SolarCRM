using API.Domain.Models;
using System.Linq;
using System.Threading.Tasks;

namespace API.Infrastructure.Services
{
    public interface IUserService
    {
        Task<Representative> Authenticate(string username, string password);
    }
    public class UserService : IUserService
    {
        private readonly DatabaseContext _databaseContext;
        public UserService(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public async Task<Representative> Authenticate(string username, string password)
        {
            // wrapped in "await Task.Run" to mimic fetching user from a db
            var user = await Task.Run(() => _databaseContext.Representatives.SingleOrDefault(x => x.Login == username && x.Password == password));

            // on auth fail: null is returned because user is not found
            // on auth success: user object is returned
            return user;
        }
    }
}
