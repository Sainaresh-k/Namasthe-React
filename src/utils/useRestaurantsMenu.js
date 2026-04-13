
const useRestaurantsMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    //fetch data
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = () => {
        const cards = mockMenuData?.data?.cards;

        const restaurantCard = cards.find((item) => {
            return item?.card?.card?.info;
        });

        const restaurantInfo = restaurantCard?.card?.card?.info;

        setResInfo(restaurantInfo);
    };
    return resInfo;
}
