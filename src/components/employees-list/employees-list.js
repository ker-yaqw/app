import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Jonh C." salary={800} increase={false} onDelete={() => console.log('Deleted')}/>
            <EmployeesListItem name="Alex M." salary={3000} increase={true} onDelete={() => console.log('Deleted')}/>
            <EmployeesListItem name="Carl W." salary={5000} increase={false} onDelete={() => console.log('Deleted')}/>
        </ul>
    )
}

export default EmployeesList;