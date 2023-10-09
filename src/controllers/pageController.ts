import { Request, Response } from "express";

export const home =(req: Request, res: Response)=>{
    res.send('Home do controller');
    //res.render('pages/home')
}

export const dogs =(req: Request, res: Response)=>{
    res.send('cachorro');
    //res.render('pages/home')
}

export const cats =(req: Request, res: Response)=>{
    res.send('gato');
    //res.render('pages/home')
}

export const fishes =(req: Request, res: Response)=>{
    res.send('peche');
    //res.render('pages/home')
}