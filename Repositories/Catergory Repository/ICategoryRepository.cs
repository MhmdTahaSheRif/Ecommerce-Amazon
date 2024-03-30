using ECommerce.Models;
using ECommerce.Repositories.Generic_Repository;

namespace ECommerce.Repositories.Catergory_Repository;

public interface ICategoryRepository : IGenericRepository<CategoryRepository>
{
    public List<Category> GetAllCategories();


}