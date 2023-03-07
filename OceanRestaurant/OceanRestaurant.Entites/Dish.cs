using OceanKitchen.Utalis.Enum;

namespace OceanRestaurant.Entites
{
    public class Dish
    {
        public Dish()
        {
            Orders = new List<Order>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public double DishPrice { get; set; }
        public string DishDetails { get; set; }
        public string? ImageName { get; set; }

        public List<Order> Orders { get; set; }

    }
}


