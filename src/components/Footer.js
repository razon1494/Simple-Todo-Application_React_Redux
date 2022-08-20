import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusChanged, colorChanged } from "../redux/filters/actions";
const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch()
  const {status,colors} = filters;
// This is a way by using reducer to find todos remaining
  /* const incomplete =todos.reduce((isComplete, current)=> {if (current.completed == false){
    return isComplete +1;
  }
return isComplete}, 0) */
  const todosRemaining = todos.filter(todo=>!todo.completed).length
  const no_of_todo = (number) =>{
    switch (number) {
      case 0:
        return 'No task'
      case 1:
        return 'One task'
    
      default:
        return `${number} tasks`;
    }
  }
  const handleStatusChanged = status =>{
      dispatch(statusChanged(status))
  }
  const handleColorChanged = color =>{
    if(colors.includes(color)){
      dispatch(colorChanged(color, 'removed'))

    }
    else{
      dispatch(colorChanged(color, 'added'))

    }
  }
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{no_of_todo(todosRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li className={`cursor-pointer ${status === 'all' && 'font-bold'}`} onClick={()=>handleStatusChanged('all')}>All</li>
        <li>|</li>
        <li className={`cursor-pointer ${status === 'incompleted' && 'font-bold'}`} onClick={()=>handleStatusChanged('incompleted')}>Incomplete</li>
        <li>|</li>
        <li className={`cursor-pointer ${status === 'completed' && 'font-bold'}`} onClick={()=>handleStatusChanged('completed')}>Complete</li>
        <li></li>
        <li></li>
        <li className={`h-3 w-3 border-2 border-green-500  rounded-full cursor-pointer  ${colors.includes('green') && 'bg-green-500'}`} onClick={()=>handleColorChanged('green')}></li>
        <li className={`h-3 w-3 border-2 border-red-500  rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'} `} onClick={()=>handleColorChanged('red')}></li>
        <li className={`h-3 w-3 border-2 border-yellow-500  rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`} onClick={()=>handleColorChanged('yellow')}></li>
      </ul>
    </div>
  );
};

export default Footer;