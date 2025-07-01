# Hooks :
It is like a fun , used to perform multiple operation , validation ....

    Easy and simple to implement 
    tasks Can be used to perform tasks that are not directly related to the main functionality of the program 

3 step work of any hook 
    1. import hook
    2. must call hook
    3. use

# 1) useNavigate() Hook :

    import {   useNavigate } from 'react-router-dom'

    const nav=useNavigate()
# 2) useLocation() hook :
    return 
// import uselocation hook
import {useLocation} from 'react-router-dom'

const location = useLocation();

console.log(location);
if(location.pathname === '/'){
    location.replace.pathname('/contact');
}

# 3) useParams
 when you wanna send data in URL 
 to use url data in object form 
 return key:value 
 
 import { useParams } from 'react-router-dom'
 const { id } = useParams();
 console.log(id);

 # 4) useSearchParams() Hook :

