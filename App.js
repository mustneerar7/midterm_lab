import { 
  Text, 
  View, 
  FlatList, 
  ScrollView 
} from "react-native";
import { useEffect } from "react";

import { useGetApi } from "./GetApiHook";
import { ProductCard } from "./ProductCard";

import { styles } from "./Styles";


const url = "https://fakestoreapi.com/products";

const App = () => {
  const { response, data, getData } = useGetApi();

  useEffect(() => {
    getData(url);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text.heading1}>Trending</Text>
      <Text style={styles.text.body}>
        Here are some products you might be interested in based on your recent
        orders.
      </Text>

      <View style={styles.listViews}>
        <FlatList
          data={data}
          numColumns={2}
          scrollEnabled={false}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.listViews}>
        <Text style={styles.text.heading2}>Most popular</Text>
        <FlatList
          scrollEnabled={false}
          data={data}
          numColumns={2}
          renderItem={({ item }) =>
            item.id % 2 === 0 ? (
              <ProductCard product={item} shiftDown={false} />
            ) : (
              <ProductCard product={item} shiftDown={true} />
            )
          }
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
}

export default App;