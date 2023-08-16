import { useState } from "react";
export default function useLike() {
    const [like, setLike] = useState([]);

    const onClickLike = (gifid) => {
        //console.log(gifid);
        const gifExist = like.find((item) => item.id == gifid);

        if (!gifExist){ 
        const newLikeObj = {
            id: gifid,
            point: 1
        }
        setLike([...like, newLikeObj]);
        } else {
            //console.log(gifExist);
            const updateLikes = like.map( (gif) => {
                if (gif.id===gifid){
                    return{
                        ...gif, 
                        point: gif.point + 1
                    }
                }
                return gif;
            });
            setLike(updateLikes);
        }
    }
    const GetTotalLikesById = (gifid) => {
        const dataLike = like.find((item) => (item.id === gifid) );
        return dataLike ? dataLike.point : 0 ;
    }

  return {
    onClickLike: (value) => onClickLike(value),
    GetTotalLikesById: (value) => GetTotalLikesById(value),
    like: like
  }

}
