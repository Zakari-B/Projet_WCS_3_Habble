import { useState, useEffect, useRef } from "react";
import {
  Flex,
  Divider,
  Input,
  InputGroup,
  IconButton,
  InputLeftElement,
  Tag,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  List,
  Spinner,
  TagLeftIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { MdRoom } from "react-icons/md";

// import ReactPaginate from "react-paginate";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import "../../styles/SearchResultCarousel.css";
import backendAPI from "../../services/backendAPI";
import { getList } from "../../services/ProfileProUtils";

export default function SearchResultCarousel() {
  // const [currentItems, setCurrentItems] = useState(fakefreelancers);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);

  const [freelancers, setFreelancers] = useState([]);
  const [addressList, setAddressList] = useState([]);
  const previousController = useRef();
  const [search, setSearch] = useState("");
  const [cityCode, setCityCode] = useState("");
  const [cityProName, setCityProName] = useState("");
  const [dist, setDist] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  const format = (val) => `${val} km`;
  const parse = (val) => val.replace(/^\$/, "");

  useEffect(() => {
    getList("freelancers").then((res) => setFreelancers(res.data));
  }, []);

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

  const handleSearchChange = (code, distkm) => {
    setDist(distkm);
    setCityCode(code);
    setIsLoading(true);

    const fetchPromise = backendAPI.get(
      `/api/freelancers/search?dist=${distkm * 1000}&cityCode=${code}`
    );

    const timeOutPromise = new Promise((resolve) => {
      setTimeout(resolve, 400);
    });

    Promise.all([fetchPromise, timeOutPromise]).then(([response]) => {
      setFreelancers(response.data);
      setIsLoading(false);
    });
  };

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
    setCityCode("");
  };

  return (
    <Flex
      bgColor="background.gray"
      w="100%"
      direction="column"
      minH="80vh"
      justify="flex-start"
    >
      <Flex
        bgColor="#e1dde4"
        w="100%"
        alignItems="baseline"
        position="fixed"
        zIndex="998"
        h="100px"
      >
        <Flex w="100%" p="30px" gap="30px" alignItems="top" justify="center">
          <Flex direction="column" w="50%">
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
                <Flex direction="column" w="-webkit-fill-available">
                  {addressList.map((city) => (
                    <ListItem
                      role="group"
                      onClick={() => {
                        if (city.properties.citycode && dist) {
                          setCityProName(city.properties.name);

                          handleSearchChange(city.properties.citycode, dist);
                          setSearch("");
                        }
                      }}
                      key={`${city.properties.citycode}`}
                    >
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
                              _groupHover={{
                                color: "pink.light",
                                fontWeight: "700",
                              }}
                            >
                              {city.properties.name} ({city.properties.postcode}
                              )
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
                    </ListItem>
                  ))}
                </Flex>
              </List>
            )}
          </Flex>

          <Box w="10%" borderRadius="md" h="50px" marginBottom="5px">
            <NumberInput
              h="50px"
              borderRadius="md"
              bgColor="white"
              onChange={(valueString) => {
                if (cityCode && dist) {
                  handleSearchChange(cityCode, dist);
                }
                setDist(parseInt(parse(valueString), 10));
              }}
              value={format(dist)}
              max={700}
              min={10}
            >
              <NumberInputField h="50px" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </Flex>
      </Flex>

      <Flex
        m="auto"
        borderRadius="21px"
        marginTop="130px"
        marginBottom="10px"
        gap="10px"
        alignItems="center"
      >
        {isLoading && (
          <Spinner
            m="auto"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="pink.light"
            size="xl"
          />
        )}

        {cityCode && !isLoading && (
          <>
            <Text>Résultat(s) pour la ville de :</Text>

            <Tag variant="solid" bgColor="pink.light" size="lg" w="fit-content">
              <TagLeftIcon as={MdRoom} />
              {cityProName}
            </Tag>
            <Text>dans un rayon de</Text>
            <Tag variant="solid" bgColor="pink.light" size="lg" w="fit-content">
              {dist} km
            </Tag>
          </>
        )}
      </Flex>
      {!isLoading && freelancers.length !== 0 ? (
        <Flex
          direction="column"
          bgColor="white"
          boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
          border="1px solid #ededed"
          p="30px 80px"
          m="auto"
          borderRadius="21px"
          width="80%"
          maxW="1200px"
          gap="40px"
          marginTop="20px"
        >
          <Text
            as="h2"
            color="purple.average"
            fontSize="1.5em"
            fontWeight="700"
          >
            {freelancers.length > 1
              ? `${freelancers.length} Professionnels trouvés`
              : `${freelancers.length} Professionnel trouvé`}
          </Text>
          {freelancers.map((freelancer) => (
            <>
              <ProfileCard freelancer={freelancer} key={freelancer.id} />
              <Divider />
            </>
          ))}
        </Flex>
      ) : (
        <Flex
          direction="column"
          bgColor="white"
          boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
          border="1px solid #ededed"
          p="30px 80px"
          m="auto"
          borderRadius="21px"
          width="80%"
          mt="0px"
          maxW="1200px"
          marginTop="20px"
        >
          <Text
            as="h2"
            minH="350px"
            color="purple.average"
            fontSize="1.5em"
            fontWeight="700"
          >
            Aucun professionnel ne correspond à votre recherche
          </Text>
        </Flex>
      )}
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
