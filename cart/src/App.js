import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import ShowCourses from './components/ShowCourses';
import UserCart from './components/UserCart';

function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'GFG T-shirt',
      price: 499,
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png',
    },
    {
      id: 2,
      name: 'GFG Bag',
      price: 499,
      image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg'
    },
    {
      id: 3,
      name: 'GFG Hoodie',
      price: 599,
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg'
    },
  ]);
  
  const [cartCourses, setCartCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState('');

  const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses.find(item => item.product.id === GFGcourse.id);
    if (alreadyCourses) {
      const latestCartUpdate = cartCourses.map(item =>
        item.product.id === GFGcourse.id ? {
          ...item, quantity: item.quantity + 1
        } : item
      );
      setCartCourses(latestCartUpdate);
    } else {
      setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
    }
  };

  const deleteCourseFromCartFunction = (GFGcourse) => {
    const updatedCart = cartCourses.filter(item => item.product.id !== GFGcourse.id);
    setCartCourses(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartCourses.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );

  return (
    <div className="App">
      <Search searchCourse={searchCourse} courseSearchUserFunction={courseSearchUserFunction} />
      <main className='App-main'>
        <ShowCourses 
          courses={filteredCourses}
          addCourseToCartFunction={addCourseToCartFunction}
        />
        <UserCart
          cartCourses={cartCourses}
          deleteCourseFromCartFunction={deleteCourseFromCartFunction}
          totalAmountCalculationFunction={totalAmountCalculationFunction}
          setCartCourses={setCartCourses}
        />
      </main>
    </div>
  );
}

export default App;
