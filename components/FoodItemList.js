import { Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState, useRef } from "react";
import {
    ImageBackground,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Modal,
    Alert,
} from "react-native";
import { API, HOST } from "../data/constants";
import StarRating from "./StarRating";

export default function FoodItemList() {
    useEffect(() => setFoodItemslist(), []);

    console.log("--------------------------------");
    console.log("Hello");
    const [loading, setLoading] = useState(false);
    const [foodItems, setFoodItems] = useState([]);

    //function setFoodItems(list) {}

    let items = [];
    let myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer " + getToken());
    myHeaders.append(
        "Authorization",
        "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4NDU5MjM1LCJleHAiOjE2ODEwNTEyMzV9.7jaXePe7Elgc018Wrl3iA19ebh4itI_LWptVv9pPJRk"
    );
    function setFoodItemsList(categories) {
        for (var i = 0; i < categories.data.length; i++) {
            var category = categories.data[i];
            items.push({
                name: category["attributes"]["name"],
                stars: category["attributes"]["Rating"],
                image:
                    HOST +
                    category["attributes"]["category_image"]["data"][
                        "attributes"
                    ]["url"],
            });
        }
        setFoodItems(items);
    }

    function setFoodItemslist() {
        const url = `${API}/categories?populate=*`;

        fetch(url, {
            method: "GET",
            headers: myHeaders,
        })
            .then((response) => response.json())
            .then((result) => setFoodItemsList(result))
            .catch((error) => console.log("error", error));
    }

    function setSubcategoryList(subCategories) {
        for (var i = 0; i < subCategories.data.length; i++) {
            var subCategory = subCategories.data[i];
            items.push({
                id: subCategory["id"],
                name: subCategory["attributes"]["name"],
                stars: subCategory["attributes"]["Rating"],
                image:
                    HOST +
                    subCategory["attributes"]["subcategory_image"]["data"][
                        "attributes"
                    ]["url"],
            });
        }
        setFoodItems(items);
    }

    function setSubCategory(category) {
        console.log(category);
        const SubCategoryURL = `${API}/sub-catogaries?populate=*&filters[category][$eq]=${category}`;
        fetch(SubCategoryURL, {
            method: "GET",
            headers: myHeaders,
        })
            .then((response) => response.json())
            .then((result) => setSubcategoryList(result))
            .catch((error) => console.log("error", error));
    }
    const [starExist, setStarExist] = useState(false);
    const SubCategoryInfo = useRef({});
    console.log(SubCategoryInfo.current);
    return (
        <View>
            {starExist == true && (
                <StarRating props={SubCategoryInfo.current} />
            )}

            <View style={{ paddingLeft: 20, marginBottom: 30 }}>
                <Text style={{ fontSize: 18, fontFamily: "OpenSans-Bold" }}>
                    Meats
                </Text>
                <ScrollView style={styles.foodCardsContainer} horizontal={true}>
                    {foodItems.map((food, index) => (
                        <View key={index} style={styles.foodCardContainer}>
                            <ImageBackground
                                source={{ uri: food.image }}
                                style={styles.foodCardImage}
                                resizeMode="cover"
                            >
                                <LinearGradient
                                    // Button Linear Gradient
                                    colors={["transparent", "#111111"]}
                                    locations={[0.3, 1]}
                                >
                                    <Pressable
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed
                                                    ? "rgba(0,0,0,.2)"
                                                    : "rgba(0,0,0,0)",
                                            },
                                            {
                                                height: "100%",
                                                borderRadius: 10,
                                                justifyContent: "flex-end",
                                                padding: 15,
                                                paddingBottom: 25,
                                            },
                                        ]}
                                        onPress={() =>
                                            setSubCategory(food.name)
                                        }
                                    >
                                        <Text style={styles.foodCardText}>
                                            {food.name}
                                        </Text>
                                        <View style={{ flexDirection: "row" }}>
                                            {[...Array(food.stars)].map(
                                                (star, starIndex) => (
                                                    <Ionicons
                                                        name="star"
                                                        key={`${food.name}-stars-${starIndex}`}
                                                        size={20}
                                                        color="#FDBF00"
                                                        style={{
                                                            marginRight: 3,
                                                        }}
                                                        onPress={() => {
                                                            // navigation.navigate(
                                                            //     "StarRating"
                                                            // );
                                                            SubCategoryInfo.current =
                                                                {
                                                                    name: food.name,
                                                                    id: food.id,
                                                                };
                                                            setStarExist(true);
                                                        }}
                                                    />
                                                )
                                            )}
                                            {[...Array(5 - food.stars)].map(
                                                (star, starIndex) => (
                                                    <Entypo
                                                        key={`${food.name}-stars-outlined-${starIndex}`}
                                                        name="star-outlined"
                                                        size={20}
                                                        color="#FDBF00"
                                                        style={{
                                                            marginRight: 3,
                                                        }}
                                                        onPress={() => {
                                                            navigation.navigate(
                                                                "StarRating"
                                                            );
                                                        }}
                                                    />
                                                )
                                            )}
                                        </View>
                                    </Pressable>
                                </LinearGradient>
                            </ImageBackground>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    foodCardsContainer: {},
    foodCardContainer: {
        width: 148,
        height: 185,
        margin: 10,
        marginLeft: 0,
        // borderRadius: 55,
        // overflow: "hidden",
    },
    foodCardImage: {
        flex: 1,
        justifyContent: "flex-end",
        borderRadius: 12,
        overflow: "hidden",
    },
    foodCardText: {
        color: "white",
        fontSize: 16,
        fontFamily: "OpenSans-Bold",
        marginBottom: 8,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        height: "50%",
    },
    modalView: {
        margin: 20,
        height: "50%",
        width: "80%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});

// useEffect(() => {
//     // .then((json) => setData(json))
//     // .catch((error) => console.error(error))
//     // .finally(() => setLoading(false));
// }, []);

//     var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4NDU5MjM1LCJleHAiOjE2ODEwNTEyMzV9.7jaXePe7Elgc018Wrl3iA19ebh4itI_LWptVv9pPJRk");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("http://192.168.0.148:1337/api/categories", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// const [foodListData, setFoodListData] = useState([
//     {
//         name: "Beef",
//         image: require("../assets/beef-example.png"),
//         opened: false,
//         stars: 4,
//         subFoods: [
//             {
//                 name: "Beef - Ribeye",
//                 image: require("../assets/foodCardExample2.png"),
//                 stars: 2,
//                 subFoods: [],
//             },
//             {
//                 name: "Beef - Ground Beef",
//                 image: require("../assets/foodCardExample4.png"),
//                 stars: 3,
//                 subFoods: [],
//             },
//         ],
//     },
//     {
//         name: "Chicken",
//         image: require("../assets/chicken-example.png"),
//         opened: false,
//         stars: 4,
//         subFoods: [
//             {
//                 name: "Chicken - Legs",
//                 image: require("../assets/foodCardExample2.png"),
//                 stars: 3,
//                 subFoods: [],
//             },
//             {
//                 name: "Chicken - Beast",
//                 image: require("../assets/foodCardExample4.png"),
//                 stars: 3,
//                 subFoods: [],
//             },
//         ],
//     },
//     {
//         name: "Turkey",
//         image: require("../assets/pork-example.png"),
//         opened: false,
//         stars: 3,
//         subFoods: [
//             {
//                 name: "Chicken",
//                 image: require("../assets/foodCardExample2.png"),
//                 stars: 3,
//                 subFoods: [],
//             },
//             {
//                 name: "Fish",
//                 image: require("../assets/foodCardExample4.png"),
//                 stars: 3,
//                 subFoods: [],
//             },
//         ],
//     },
//     {
//         name: "Fish",
//         image: require("../assets/salmon-example.png"),
//         opened: false,
//         stars: 4,
//         subFoods: [
//             {
//                 name: "Chicken",
//                 image: require("../assets/foodCardExample2.png"),
//                 stars: 3,
//                 subFoods: [],
//             },
//             {
//                 name: "Fish",
//                 image: require("../assets/foodCardExample4.png"),
//                 stars: 3,
//                 subFoods: [],
//             },
//         ],
//     },
//     {
//         name: "Ham",
//         image: require("../assets/turkey-example.png"),
//         opened: false,
//         stars: 3,
//         subFoods: [
//             {
//                 name: "Chicken",
//                 image: require("../assets/foodCardExample2.png"),
//                 stars: 3,
//                 subFoods: [],
//             },
//             {
//                 name: "Fish",
//                 image: require("../assets/foodCardExample4.png"),
//                 stars: 3,
//                 subFoods: [],
//             },
//         ],
//     },
// ]);

// const updateFoodListItems = ({ foodItemIndex, food }) => {
//     if (food.subFoods.length === 0) return;
//     if (food.opened) {
//         // get the id of all the foods on that group and its children

//         return;
//     }

//     const foodListDataCopy = [...foodListData];

//     // this updates the list to let the user know that the food they clicked
//     // on
//     const updatedFoodListData = foodListDataCopy.map((foodItem) => {
//         if (foodItem.name === food.name) {
//             return (foodItem.opened = !foodItem.opened);
//         }

//         return;
//     });

//     const foodListDataPartOne = foodListDataCopy.slice(
//         0,
//         foodItemIndex + 1
//     );
//     const foodListDataPartTwo = foodListDataCopy.slice(foodItemIndex + 1);

//     const newFoodListData = [
//         ...foodListDataPartOne,
//         ...food.subFoods,
//         ...foodListDataPartTwo,
//     ];

//     console.log(newFoodListData);

//     return setFoodListData(newFoodListData);
// };
