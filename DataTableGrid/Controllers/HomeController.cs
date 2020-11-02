using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DataTableGrid.Controllers
{
    public class HomeController : Controller
    {
        public System.Web.Mvc.ActionResult Index()
        {
            return View();
        }

        public System.Web.Mvc.ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        [System.Web.Mvc.HttpPost]
        [System.Web.Mvc.Route("{dataConsulta}")]
        public System.Web.Mvc.ActionResult GetCliente([FromBody] DateTime? dataConsulta)
        {
            List<string> lista = new List<string>();

            for (int i = 0; i < 20; i++)
            {
                lista.Add("teste" + i.ToString());
            }

            return Json(lista, JsonRequestBehavior.AllowGet);
        }

        public System.Web.Mvc.ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}