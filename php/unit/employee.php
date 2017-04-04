<?php 

namespace Employee;

function employee()
{
    echo 'hellow' . PHP_EOL;
    return new Employee();
}

class Employee
{
    public $name;
    public $surName;
    public $salary;

    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    public function setSurname($surname)
    {
        $this->surName = $surname;
        return $this;
    }

    public function setSalary($salary)
    {
        $this->salary = $salary;
        return $this;
    }

    public function __toString()
    {
        $info = 'Name: ' . $this->name . PHP_EOL;
        $info .= 'Surname: ' . $this->surName . PHP_EOL;
        $info .= 'Salary: ' . $this->salary . PHP_EOL;

        return $info;
    }
}
