using OceanKitchen.Utalis.Enum;

namespace OceanRestaurant.Dtos.Dishes
{
    public class DishDetailsDto
    {

        public int Id { get; set; }
        public int DishPrice { get; set; }
        public string Name { get; set; }
        public string DishDetails { get; set; }
    }
}
