import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import GlobalStyles from './styles/GlobalStyles' ;
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';


const queryClient = new QueryClient({
  defaultOptions : {
    queries:{
      // staleTime : 60 * 1000 ,
      staleTime : 0 ,

    }
  }
}) ;


const App = () => {
  return (
    <QueryClientProvider client ={queryClient}>
       <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toaster
      gutter={12} 
      position='top-center'
      containerStyle={{margin :"8px"} }
      toastOptions={
        {
          success : {
            duration : 3000
          } ,
          error :{
            duration : 5000
          } ,
          style :{
            fontSize : "16px",
            maxWidth : "500px" ,
            padding : "16px 24px" ,
            backgroundColor : "var(--color-gray-0)",
            color : "var(--color-gray-700)",
          }
        }
      }
      />
    </QueryClientProvider>
  )
}

export default App
