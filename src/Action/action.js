import {AddData,DeleteData,IncrimentData,DecrimentData,ClearData,Totalprice} from './actiontype';

export const AddDataFunction = Data => dispatch =>{
    dispatch({
        payload : Data,
        type : AddData
    })
}

export const DeleteDataFunction = Data => dispatch =>{
    dispatch({
        payload : Data,
        type : DeleteData
    })
}

export const IncrimentDataFunction = Data => dispatch =>{
    dispatch({
        payload : Data,
        type : IncrimentData
    })
}

export const DecrimentDataFunction = Data => dispatch =>{
    dispatch({
        payload : Data,
        type : DecrimentData
    })
}

export const ClearDataFunction = Data => dispatch =>{
    console.log(Data)
    dispatch({
        payload : Data,
        type : ClearData
    })
}

export const GetTotalprice = Data => dispatch =>{
    dispatch({
        payload : Data,
        type : Totalprice
    })
}