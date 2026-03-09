export interface Reviews {
    _id: string;
    product:{
        _id: string;
        title: string;
        imgCover: string;
        id: string;
    };
    user:{
        _id: string;
        firstName: string;
        lastName: string;
        photo: string;
    };
    rating: number;
    title:string;
    comment: string;
    status: string;
    createdAt: string;
    updatedAt: string;

}
