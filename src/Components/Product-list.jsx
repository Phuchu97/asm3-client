import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getListProducts } from "../Services/productService";
import { ColorRing } from 'react-loader-spinner';
import '../css/productListPage.css';
import Numeral from 'react-numeral';
import { Container, Grid, Box, TextField, Checkbox, FormControlLabel, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function ListProductComponent() {
    const nagvigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [listProducts, setListProducts] = useState([]);

    const [categories, setCategories] = useState({
        electronics: false,
        fashion: false,
        books: false,
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (category) => {
        setCategories({ ...categories, [category]: !categories[category] });
    };

    const handleViewMore = () => {
        nagvigate('/product-list')
    };

    useEffect(() => {
        getListProducts((res) => {
            setListProducts(res.data);
            setIsLoading(false);
        });
    }, []);

    return (
        <Container maxWidth="full" className="p-0 ">
            <Grid className="bg-pro-list"></Grid>
            <Grid container spacing={4} className="mt-4 list-products">
                <Grid item xs={12} md={2}>
                    <Box className="sidebar">
                        <Typography variant="h6" gutterBottom>
                            Filter by Category
                        </Typography>
                        <Grid className="d-flex flex-column">
                            {Object.keys(categories).map((category) => (
                                <FormControlLabel
                                    key={category}
                                    control={
                                        <Checkbox
                                            checked={categories[category]}
                                            onChange={() => handleCategoryChange(category)}
                                        />
                                    }
                                    label={category.charAt(0).toUpperCase() + category.slice(1)}
                                />
                            ))}
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={10}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        InputProps={{
                            startAdornment: (
                                <SearchIcon position="start" />
                            ),
                        }}
                    />
                    {
                        isLoading ? <div className={isLoading ? 'active' : 'not-active'}>
                            <Grid display={'flex'} justifyContent={'center'}>
                                <ColorRing
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={['#f0d29c', '#c5a568', '#ccb286', '#d2b789', '#afa999']}
                                />
                            </Grid>
                        </div> :
                            <div>
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <Grid container padding={0} spacing={2} className="mt-4">
                                        {
                                            listProducts.length > 0 && listProducts.map(obj => {
                                                return (
                                                    <Grid item md={4} lg={3} sm={6} xs={12} className="product-slide-item" marginBottom={'30px'}>
                                                        <Link to={`/product-detail/${obj._id}`} style={{ textDecoration: 'none' }}>
                                                            <Grid className="product-item">
                                                                <img src={obj.image[0]} alt="product" />
                                                            </Grid>
                                                            <Grid className="product-content">
                                                                <Typography variant="h4">{obj.name}</Typography>
                                                            </Grid>
                                                        </Link>
                                                        <Grid className="product-content" textAlign={'center'}>
                                                            {
                                                                obj.price > 1000 ? <Typography><Numeral value={obj.price} format={"0,0"} /> VND</Typography> :
                                                                    <Link to={"https://zalo.me/0967870722"}>
                                                                        <Button style={{ fontSize: '16px', padding: '6px 10px', color: '#bea662', backgroundColor: 'rgb(28 103 72)' }}>
                                                                            Liên hệ
                                                                        </Button>
                                                                    </Link>
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </div>
                            </div>
                    }
                </Grid>
            </Grid>
        </Container>
    );
}

export default ListProductComponent;