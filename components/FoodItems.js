// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import {
//     Text,
//     View,
//     ImageBackground,
//     ScrollView,
//     StyleSheet,
//     TouchableHighlight,
//     Pressable,
// } from "react-native";
// import { Ionicons, Entypo } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
// import { API, HOST } from "../data/constants";

// function FoodItems({ props }) {
//     useEffect(() => {
//         setSubFoodItem([...props]);
//     }, []);
//     const [subFoodItem, setSubFoodItem] = useState([]);

//     let myHeaders = new Headers();
//     // myHeaders.append("Authorization", "Bearer " + getToken());
//     myHeaders.append(
//         "Authorization",
//         "Bearer " +
//             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc4NDU5MjM1LCJleHAiOjE2ODEwNTEyMzV9.7jaXePe7Elgc018Wrl3iA19ebh4itI_LWptVv9pPJRk"
//     );

//     function setSubcategoryList(subCategories) {
//         let items = [];
//         for (var i = 0; i < subCategories.data.length; i++) {
//             var subCategory = subCategories.data[i];
//             items.push({
//                 name: subCategory["attributes"]["name"],
//                 stars: subCategory["attributes"]["Rating"],
//                 image:
//                     HOST +
//                     subCategory["attributes"]["subcategory_image"]["data"][
//                         "attributes"
//                     ]["url"],
//             });
//         }
//         setSubFoodItem(items);
//     }

//     function setSubCategory(category) {
//         const SubCategoryURL = `${API}/sub-catogaries?populate=*&filters[category][$eq]=${category}`;
//         fetch(SubCategoryURL, {
//             method: "GET",
//             headers: myHeaders,
//         })
//             .then((response) => response.json())
//             .then((result) => setSubcategoryList(result))
//             .catch((error) => console.log("error", error));
//     }
//     console.log("Child", subFoodItem);
//     return (
//         <View style={{ paddingLeft: 20, marginBottom: 30 }}>
//             <Text style={{ fontSize: 18, fontFamily: "OpenSans-Bold" }}>
//                 Meats
//             </Text>
//             <ScrollView style={styles.foodCardsContainer} horizontal={true}>
//                 {subFoodItem.map((food, index) => (
//                     <View key={index} style={styles.foodCardContainer}>
//                         <ImageBackground
//                             source={{ uri: food.image }}
//                             style={styles.foodCardImage}
//                             resizeMode="cover"
//                         >
//                             <LinearGradient
//                                 // Button Linear Gradient
//                                 colors={["transparent", "#111111"]}
//                                 locations={[0.3, 1]}
//                             >
//                                 <Pressable
//                                     style={({ pressed }) => [
//                                         {
//                                             backgroundColor: pressed
//                                                 ? "rgba(0,0,0,.2)"
//                                                 : "rgba(0,0,0,0)",
//                                         },
//                                         {
//                                             height: "100%",
//                                             borderRadius: 10,
//                                             justifyContent: "flex-end",
//                                             padding: 15,
//                                             paddingBottom: 25,
//                                         },
//                                     ]}
//                                     onPress={() => setSubCategory(food.name)}
//                                 >
//                                     <Text style={styles.foodCardText}>
//                                         {food.name}
//                                     </Text>
//                                     <View style={{ flexDirection: "row" }}>
//                                         {[...Array(food.stars)].map(
//                                             (star, starIndex) => (
//                                                 <Ionicons
//                                                     name="star"
//                                                     key={`${food.name}-stars-${starIndex}`}
//                                                     size={20}
//                                                     color="#FDBF00"
//                                                     style={{ marginRight: 3 }}
//                                                 />
//                                             )
//                                         )}
//                                         {[...Array(5 - food.stars)].map(
//                                             (star, starIndex) => (
//                                                 <Entypo
//                                                     key={`${food.name}-stars-outlined-${starIndex}`}
//                                                     name="star-outlined"
//                                                     size={20}
//                                                     color="#FDBF00"
//                                                     style={{ marginRight: 3 }}
//                                                 />
//                                             )
//                                         )}
//                                     </View>
//                                 </Pressable>
//                             </LinearGradient>
//                         </ImageBackground>
//                     </View>
//                 ))}
//             </ScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     foodCardContainer: {
//         width: 148,
//         height: 185,
//         margin: 10,
//         marginLeft: 0,
//         // borderRadius: 55,
//         // overflow: "hidden",
//     },
//     foodCardImage: {
//         flex: 1,
//         justifyContent: "flex-end",
//         borderRadius: 12,
//         overflow: "hidden",
//     },
//     foodCardText: {
//         color: "white",
//         fontSize: 16,
//         fontFamily: "OpenSans-Bold",
//         marginBottom: 8,
//     },
// });

// export default FoodItems;
