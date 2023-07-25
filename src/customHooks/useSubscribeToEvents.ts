import React ,{ useEffect }  from 'react'

export const useSubscribeToEvents = (eventEmitter:any,callback:(event:any)=>{})=>{
useEffect(() => {
    const subscriber = eventEmitter.getObservable().subscribe(callback)

    return () => subscriber.unsubscribe();
  }, []);


  }