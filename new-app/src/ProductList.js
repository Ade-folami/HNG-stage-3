import React, { useState, useEffect } from "react";
import {
  Card,
  Image,
  Text,
  Group,
  Loader,
  Container,
  Title,
  Badge,
  Button,
} from "@mantine/core";
const fetchProducts = async ({
  organization_id,
  reverse_sort,
  page,
  size,
  Appid,
  Apikey,
}) => {
  const url = new URL("https://timbu-get-all-products.reavdev.workers.dev/");
  url.searchParams.append("organization_id", organization_id);
  url.searchParams.append("reverse_sort", reverse_sort);
  url.searchParams.append("page", page);
  url.searchParams.append("size", size);
  url.searchParams.append("Appid", Appid);
  url.searchParams.append("Apikey", Apikey);
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const params = {
      organization_id: "929d090c9fe8411282d332c3c6efa209",
      reverse_sort: "false",
      page: page,
      size: 10,
      Appid: "7QGDD2BQ5OU1QY6",
      Apikey: "7c19b29c18f9459085ce5c029c4dbc0820240713121827698072",
    };
    const getProducts = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetchProducts(params);
        setProducts(data.items);
        setIsEmpty(data.total === 0);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, [page]);
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;
  if (isEmpty) return <div>No products found</div>;
  return (
    <Container>
      {" "}
      <Group>
        {" "}
        {products.map((product) => (
          <Card
            key={product.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
          >
            {" "}
            <Card.Section>
              {" "}
              <Image
                src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
                height={160}
                alt={product.name}
              />{" "}
            </Card.Section>{" "}
            <Group position="apart" mt="md" mb="xs">
              {" "}
              <Text weight={500}>{product.name}</Text>{" "}
              <Badge color="pink" variant="light">
                {" "}
                ${product?.current_price[0]?.USD[0]}{" "}
              </Badge>
            </Group>{" "}
            <Text size="sm">{product?.description}</Text>{" "}
          </Card>
        ))}{" "}
      </Group>{" "}
      <Group position="center" mt="md">
        {" "}
        <Button onClick={() => setPage(page > 1 ? page - 1 : 1)}>
          Prev
        </Button>{" "}
        <Button onClick={() => setPage(page + 1)}>Next</Button>{" "}
      </Group>{" "}
    </Container>
  );
};
export default ProductList;
