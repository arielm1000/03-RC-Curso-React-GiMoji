import { useEffect, useState } from "react";
import { SelectData } from "./components/SelectData";
import NavBar from "./components/header/NavBar";
import Banner from "./components/header/Banner";
import SelectCategories from "./components/ui/SelectCategories";
import Search from "./components/ui/Search";
import GifCard from "./components/GifCard";
import { giphyAxios } from "./components/config/AxiosGiphy";
import { useFetch } from "./hooks/useFetch";
import {Loading} from "../src/components/ui/Loading"
import { useFetchAxios } from "./hooks/useFetchAxios";
import { useAxiosGif } from "./hooks/useAxiosGif";


const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
const urlApi = import.meta.env.VITE_URL_API;


export const Gimoji = () => {

    const [categories, setCategories] = useState([]);
    const [gifs, setGifs] = useState([]);
    const [search, setSearch] = useState('autos');
    //console.log(apiKey)
    //const { data: dataCateg } = useFetch(`${urlApi}gifs/categories?api_key=${apiKey}`);
    const { data: dataCateg } = useFetchAxios(`gifs/categories?api_key=${apiKey}`, 'get');
    //const { data: dataSearch, isLoading } = useFetch(`${urlApi}gifs/search?api_key=${apiKey}&q=${search}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    //const { data: dataSearch, isLoading } = useFetchAxios(`gifs/search?api_key=${apiKey}&q=${search}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    const { data: dataSearch, isLoading, onLoadMore } = useAxiosGif(search);


    useEffect(() => {
        getCategories();
        getInit();
    }, [dataCateg, dataSearch]);
    
    useEffect(() => {
        getInit();
    }, [search]);

    const getCategories = async() => {
        setCategories(dataCateg);
    }
/*     const getCategories = async() => {
        const resp = await fetch(`${urlApi}gifs/categories?api_key=${apiKey}`);
        const { data } = await resp.json();
        setCategories(data);
        console.log(data);
    }
 */
/*     const getCategories = async() => {
        const cateData = await giphyAxios.get(`gifs/categories?api_key=${apiKey}`);
        const {data} = cateData;
        const {data: dataCateg} = data;
        setCategories(dataCateg);
    } */

    const getInit = async() => {
        //const resp = await fetch(`${urlApi}gifs/search?api_key=${apiKey}&q=${search}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
        //const { data } = await resp.json();
        setGifs(dataSearch);
        //console.log(data);
    } 
/*     const getInit = async() => {
        const resp = await fetch(`${urlApi}gifs/search?api_key=${apiKey}&q=${search}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
        const { data } = await resp.json();
        setGifs(data);
        console.log(data);
    }  */
/*     const getInit = async() => {
        const {data} = await giphyAxios.get(`gifs/search?api_key=${apiKey}&q=${search}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
        const { data: searchData } = data;
        setGifs(searchData);
        console.log(searchData);
    } */

    const onChanByCategories = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }

    const onChangeSearch = (event) => {
        const data = event.target.value;
        console.log(event.target.value);
        if (data.length >=2) { 
            setSearch(event.target.value);
        }
    }
    if (isLoading) {
        return <Loading />
    }
/*     const onLoadMore = () =>
    {
        console.log('Cargar mas')
    }
    
 */    return (
    <>
        <NavBar />
        <Banner />

        <div className="container">
            <div className="row">
                <div className="col-sm-4">  
                    <SelectCategories dataItem = { categories } onChanCategories = {onChanByCategories} />
                </div>
                <div className="col-sm-6">
                    <Search onChangeSearch={onChangeSearch}/>
                </div>
            </div>
        </div>

        <div className="album py-5 ">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                    <GifCard dataItem={gifs} />
                </div>
            </div>
            <div className="row mt-5">
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={()=>onLoadMore()}
                >CARGAR MAS</button>
            </div>
        </div>        
    </>
  )
}
