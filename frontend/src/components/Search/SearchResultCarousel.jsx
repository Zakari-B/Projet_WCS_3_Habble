import { useState, useEffect, useRef } from "react";
import {
  Flex,
  Divider,
  Input,
  InputGroup,
  IconButton,
  List,
  ListItem,
  Text,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
// import ReactPaginate from "react-paginate";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import "../../styles/SearchResultCarousel.css";

export default function SearchResultCarousel({ freelancers }) {
  const [search, setSearch] = useState("");

  // const [currentItems, setCurrentItems] = useState(fakefreelancers);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);

  const [addressList, setAddressList] = useState([]);
  const previousController = useRef();

  const getAddressList = (signal) => {
    axios
      .get(
        `https://api-adresse.data.gouv.fr/search/?q=${search}&type=municipality&autocomplete=1&limit=3`,
        { signal }
      )
      .then((response) => {
        setAddressList(response.data.features);
      });
  };

  useEffect(() => {
    if (search.length >= 1) {
      if (previousController.current) {
        previousController.current.abort();
      }
      const controller = new AbortController();
      const { signal } = controller;
      previousController.current = controller;
      getAddressList(signal);
    }
  }, [search]);

  // useEffect(() => {
  //   const endOffset = itemOffset + itemsPerPage;
  //   setCurrentItems(fakefreelancers.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(fakefreelancers.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage]);

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % fakefreelancers.length;
  //   setItemOffset(newOffset);
  //   setCurrentPage(event.selected + 1);
  // };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Flex bgColor="background.gray" w="100%" direction="column">
      <Flex
        bgColor="#e1dde4"
        w="100%"
        alignItems="baseline"
        position="fixed"
        zIndex="998"
        h="100px"
      >
        <Flex direction="column" w="100%" p="30px">
          <Flex direction="column" w="70%" m="auto">
            <InputGroup display="flex" alignItems="center" marginBottom="5px">
              <InputLeftElement
                pointerEvents="none"
                display="flex"
                alignItems="center"
                h="100%"
              >
                <IconButton
                  variant="unstyled"
                  color="gray.500"
                  aria-label="Search database"
                  icon={<Search2Icon />}
                />
              </InputLeftElement>
              <Input
                type="search"
                id="search"
                variant="outline"
                autocomplete="off"
                bgColor="white"
                h="50px"
                name="search"
                placeholder="Recherchez une ville ou une commune"
                value={search}
                onChange={handleSearch}
              />
            </InputGroup>
            {addressList.length !== 0 && search !== "" && (
              <List
                bg="white"
                width="100%"
                borderRadius="4px"
                overflow="hidden"
                zIndex="997"
                boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
                border="1px solid #ededed"
              >
                <ListItem>
                  <Flex direction="column" w="-webkit-fill-available">
                    {addressList.map((city) => (
                      <a w="100%" href="/#">
                        <Flex
                          _hover={{
                            color: "pink.light",
                            bgColor: "gray.100",
                          }}
                          direction="row"
                          p={5}
                          w="100%"
                          align="center"
                        >
                          <Flex
                            pl="20px"
                            justifyContent="space-between"
                            width="100%"
                            alignItems="center"
                          >
                            <Flex direction="column" alignItems="flex-start">
                              <Text
                                fontSize="lg"
                                align="left"
                                color="purple.dark"
                                _hover={{
                                  color: "pink.light",
                                }}
                              >
                                {city.properties.name} (
                                {city.properties.postcode})
                              </Text>
                              <Text
                                fontSize="md"
                                align="left"
                                color="purple.dark"
                              >
                                {city.properties.context}
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </a>
                    ))}
                  </Flex>
                </ListItem>
              </List>
            )}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        bgColor="white"
        boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
        border="1px solid #ededed"
        p="50px 80px"
        m="auto"
        borderRadius="21px"
        width="80%"
        maxW="1200px"
        gap="40px"
        marginTop="150px"
      >
        {freelancers.map((freelancer) => (
          <>
            <ProfileCard freelancer={freelancer} key={freelancer.id} />
            <Divider />
          </>
        ))}
      </Flex>
      {/* <ReactPaginate
        previousLabel="< Précédent"
        nextLabel="Suivant >"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        // previousClassName={itemOffset > 0 ? "previousClassName" : "alldisabled"}
        previousLinkClassName="page-link"
        // nextClassName={
        //   currentPage === Math.ceil(fakefreelancers.length / itemsPerPage)
        //     ? "alldisabled"
        //     : "nextClassName"
        // }
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="break"
        breakLinkClassName="page-link"
        // pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        // onPageChange={handlePageClick}
        containerClassName="containerClassName"
        activeClassName="activePage"
      /> */}
    </Flex>
  );
}
