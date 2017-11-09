using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AcmeRestService.Models
{
    public class Employee
    {
        public int id { get; set; }
        public string name { get; set; }
        public DateTime hired { get; set; }
        public DateTime birth { get; set; }
        public int yearsService
        {
            get
            {
                return yearsDifference(hired);
            }
        }

        private int yearsDifference(DateTime date)
        {
            DateTime today = DateTime.Today;
            Boolean monthIsPast, dayIsPast;
            int yearsDiff = today.Year - date.Year;
            monthIsPast = today.Month >= date.Month;
            dayIsPast = today.Day >= date.Day;
            if (monthIsPast && dayIsPast) yearsDiff--;
            return yearsDiff;
        }
        public int age
        {
            get
            {
                return yearsDifference(birth);
            }
        }

        public Employee(int id, string name, DateTime hired, DateTime birth)
        {
            this.id = id;
            this.name = name;
            this.hired = hired;
            this.birth = birth;
        }

        public Employee() : this(0, "", new DateTime(2000, 12, 17), new DateTime(2000, 12, 17)) { }
    }
}
