import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CryptoState } from '../ContextApi';
import { CoinList } from "../apis/api";
import { createTheme, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography } from "@mui/material";
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import "./CoinsTable.css";
import SearchIcon from '@mui/icons-material/Search';
import { Pagination } from "@mui/lab";
import Button from '@mui/material/Button';
import uparrow from '../assets/uparrow.png';

function NumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { NumberWithCommas }

function CoinsTable() {

    const [coins, setCoins] = useState([]);

    const [loading, setLoading] = useState(false);

    const [search, setSearch] = useState([]);

    const [currdata, setCurrdata] = useState(coins);

    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    const { currency, symbol } = CryptoState();
    //destructing currency from CryptoState

    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));

        setCoins(data);
        setCurrdata(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchCoins();
    }, [currency]);

    // const darkTheme = createTheme({
    //     palette: {
    //         primary: {
    //             main: "#fff",
    //         },
    //         type: "dark",
    //     },
    // });


    // const handleSearch = () => {
    //     setCurrdata(coins.filter((coin) =>

    //         coin.name.toLowerCase().includes(search) ||
    //         coin.symbol.toLowerCase().includes(search)
    //     ))
    // }

    //we will compare the input text by name as well as symbol 
    //we will include handlesearch in TableBody so that we will get filtered coins

    return (

        // <ThemeProvider theme={darkTheme}>
        <Container style={{ textAlign: "center" }}>
        <div className='head1'>

            {/* <Typography
                variant="h4"
                style={{ marginRight: 700, marginBottom: 60, fontSize: "1.5rem", fontWeight: "540" }}
            > */}
                Top 100 Cryptocurrencies by Market Cap
            {/* </Typography> */}
        </div>
            <div className='btns'>

                <Button className='btn' size="small"
                    style={{
                        backgroundColor: "rgb(240, 240, 240)",
                        color: "black",
                        fontSize: 10,
                        textTransform: 'capitalize',
                        marginRight: 30
                    }}
                    variant="contained" >
                    Favorites
                </Button>
                <Button size="small"
                    style={{
                        backgroundColor: "rgb(240, 240, 240)",
                        color: "blue",
                        fontSize: 10,
                        textTransform: 'capitalize',
                        marginRight: 30
                    }}
                    variant="contained" >
                    CryptoCurrencies
                </Button>
                <Button size="small"
                    style={{
                        backgroundColor: "rgb(240, 240, 240)",
                        color: "black",
                        fontSize: 10,
                        textTransform: 'capitalize',
                        marginRight: 30
                    }}
                    variant="contained" >
                    DeFi
                </Button>
                <Button size="small"
                    style={{
                        backgroundColor: "rgb(240, 240, 240)",
                        color: "black",
                        fontSize: 10,
                        textTransform: 'capitalize',
                        marginRight: 30
                    }}
                    variant="contained" >
                    NFTs & Collectibles
                </Button>
            </div>
            {/* 
                <TextField
                    label={<><SearchIcon/>
                    <span style={{fontSize:18, width:"200px", marginBottom:20}}>Search For a Crypto Currency</span></>}
                    variant='outlined'
                    sx={{ "& label": { color: "white"} }}
                    style={{ marginBottom: 20, width: "100%", color: "white"}}
                    InputProps={{ style: { color: "white",} }}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        handleSearch();
                    }}
                >

                </TextField> */}

            <TableContainer>
                {
                    loading ? (
                        <LinearProgress style={{ backgroundColor: "blue" }} />
                    ) : (
                        <Table style={{ border: "1px solid grey" }}>
                            <TableHead style={{ backgroundColor: "white" }}>
                                <TableRow>

                                    {/* in TableRoww have array of Coin Price 24th... and Market Cap and we gonna map on this with variable head and we gonna render 5 tablecells listed below */}

                                    {["#", "NAME", "PRICE", "24H", "7D", "MARKET CAP", "VOLUME", "CIRCULATING SUPPLY"].map((head) => (
                                        <TableCell
                                            style={{
                                                color: "black",
                                                fontWeight: "700"
                                            }}
                                            key={head}
                                            align={head === "Coin" ? "left" : "right"}
                                        >
                                            {head}
                                        </TableCell>
                                    ))}

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currdata.slice((page - 1) * 10, (page - 1) * 10 + 10).map((row) => {
                                    const profit = row.price_change_percentage_24h > 0;
                                    const profit2 = row.price_change_percentage_7d_in_currency > 0;

                                    //slice is used so let page=1 so on 1st page 0 to 10 coins will be shown and if page=2 then 10 to 20 coins on next page
                                    return (
                                        <TableRow
                                            // onClick={() => navigate(`/coins/${row.id}`)}
                                            className="row"
                                            key={row.name}
                                        >
                                            <TableCell align='right'
                                                style={{ color: 'black' }}>
                                                {row.market_cap_rank}
                                            </TableCell>
                                            <TableCell
                                                // align='right'
                                                // component="th"
                                                // scope="row"
                                                style={{
                                                    display: "flex",
                                                    gap: 15,
                                                }}
                                            >
                                                <img
                                                    src={row?.image}
                                                    alt={row.name}
                                                    height="30"
                                                    style={{ marginBottom: 10 }}
                                                />
                                                <div
                                                // style={{ display: "flex", flexDirection: "row" }}
                                                >
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fonstSize: 22,
                                                            color: "black",
                                                            height: "20",
                                                        }}
                                                    >

                                                        {row.symbol}
                                                    </span>
                                                    <span
                                                        style={{ color: "darkgrey" }}
                                                    >
                                                        {" "}
                                                        {row.name}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell align='right'
                                                style={{ color: 'black' }} >
                                                ${" "}
                                                {NumberWithCommas(row.current_price.toFixed(2))}
                                            </TableCell>
                                            <TableCell
                                                align='right'
                                                style={{
                                                    color: profit > 0 ? "green" : "red",
                                                    fontWeight: 500,

                                                }}>

                                                {/* {profit}
                                                 <img src={uparrow}/> */}
                                                {profit && "+"}
                                                {row.price_change_percentage_24h.toFixed(2)}%
                                            </TableCell>
                                            {/* <TableCell  >
                                                {row.price_change_percentage_7d_in_currency}
                                            </TableCell> */}

                                            <TableCell
                                                align='right'
                                                style={{
                                                    color: profit2 > 0 ? "green" : "red",
                                                    fontWeight: 500,
                                                }}>
                                                {profit2 && "+"}
                                                {row.price_change_percentage_7d_in_currency.toFixed(2)}%
                                            </TableCell>

                                            <TableCell align='right'
                                                style={{ color: 'black' }}
                                            >
                                                ${" "}
                                                {NumberWithCommas(row.market_cap.toString().slice(0, -6)
                                                )}
                                                M
                                            </TableCell>
                                            <TableCell align='right'
                                                style={{ color: 'black' }}
                                            >
                                                ${" "}
                                                {NumberWithCommas(row.total_volume.toString()
                                                )}

                                            </TableCell>

                                            <TableCell align='right' >

                                                {NumberWithCommas(row.circulating_supply.toString().slice(0, -3)
                                                )}
                                                {" "}BTC
                                                {/* {row.circulating_supply} */}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    )
                }
            </TableContainer>

            <Pagination
                style={{
                    padding: 20,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                }}
                sx={{ "& .MuiPaginationItem-root": { color: "purple" } }}
                count={(currdata?.length / 10).toFixed(0)}
                onChange={(_, value) => {
                    setPage(value);
                    window.scroll(0, 450);
                }}
            />
        </Container>
        // </ThemeProvider>
    )
}

export default CoinsTable