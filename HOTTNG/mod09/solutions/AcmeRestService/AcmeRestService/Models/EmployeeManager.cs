using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AcmeRestService.Models
{
    public static class EmployeeManager
    {
        static List<Employee> allEmployees;
        static EmployeeManager()
        {
            allEmployees = new List<Models.Employee>();
            allEmployees.Add(new Models.Employee(1, "Amy", new DateTime(2005, 3, 3), new DateTime(1985, 4, 12)));
            allEmployees.Add(new Models.Employee(2, "Alice", new DateTime(2012, 11, 7), new DateTime(1990, 12, 31)));
            allEmployees.Add(new Models.Employee(3, "Jan", new DateTime(2011, 7, 14), new DateTime(1989, 8, 9)));
            allEmployees.Add(new Models.Employee(4, "Munzerul", new DateTime(2015, 1, 1), new DateTime(1980, 2, 3)));
            allEmployees.Add(new Models.Employee(5, "Edwardo", new DateTime(2004, 10, 20), new DateTime(1986, 5, 30)));
        }

        public static Employee[] GetAll() { return allEmployees.ToArray(); }

        public static void Delete(int id)
        {
            Employee match = GetById(id);
            if (match != null)
                allEmployees.Remove(match);

        }

        public static Employee GetById(int id)
        {
            try
            {
                Employee match = allEmployees.Where(e => e.id == id).First();
                return match;
            }
            catch (Exception)
            {
                return null;
            }

        }

        public static int Insert(Employee emp)
        {
            emp.id = nextId();
            allEmployees.Add(emp);
            return emp.id;
        }

        public static int Insert(string name, DateTime hired, DateTime birth)
        {
            Employee emp = new Employee(nextId(), name, hired, birth);
            allEmployees.Add(emp);
            return emp.id;
        }

        public static bool Update(Employee emp)
        {
            Employee match = GetById(emp.id);
            if (match != null)
            {
                allEmployees.Remove(match);
                allEmployees.Add(emp);
                return true;
            }
            else return false;
        }

        private static int nextId()
        {
            int max = allEmployees.Max(e => e.id);
            return max + 1;
        }

    }
}
