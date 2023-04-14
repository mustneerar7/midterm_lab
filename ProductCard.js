import { Text, Image, TouchableOpacity } from "react-native";

const ProductCard = ({ product, shiftDown }) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: shiftDown ? 60 : 0,
        height: 220,
        width: 180,
        backgroundColor: "#ffffff",
        margin: 8,
        borderRadius: 8,
        shadowOffset: { width: 16, height: 16 },
        shadowRadius: 8,
        shadowColor: "black",
        elevation: 1,
      }}
    >
      <Image
        source={{ uri: product.image }}
        style={{ width: 100, height: 100, alignSelf: "center", marginTop: 30 }}
      />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{ fontSize: 16, margin: 12, fontWeight: "500" }}
      >
        {product.title}
      </Text>

      <Text style={{ fontSize: 24, marginRight: 8, fontWeight: "300" }}>
        {product.price}
      </Text>
    </TouchableOpacity>
  );
};

export { ProductCard };
