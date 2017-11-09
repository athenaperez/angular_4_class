using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AcmeRestService.Models;

namespace AcmeRestService.Controllers
{
    public class HomeController : ApiController
    {
        // GET: api/Home
        public IEnumerable<Employee> Get()
        {
            
            return EmployeeManager.GetAll();
        }

        // GET: api/Home/5
        public Employee Get(int id)
        {
            return EmployeeManager.GetById(id);
        }

        // POST: api/Home
        public Employee Post(Employee value)
        {
            int id=EmployeeManager.Insert(value);
            return EmployeeManager.GetById(id);
        }

        // PUT: api/Home/5
        public bool Put(Employee value)
        {
            return EmployeeManager.Update(value);
        }

        // DELETE: api/Home/5
      
        public bool Delete(int id)
        {
            try
            {
                EmployeeManager.Delete(id);
                return true;
            }
            catch (Exception)
            {
                
                return false;
            }
            
        }

        // OPTIONS http-verb handler
        public HttpResponseMessage OptionsUser()
        {
            var response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;
            return response;
        }
    }
}
