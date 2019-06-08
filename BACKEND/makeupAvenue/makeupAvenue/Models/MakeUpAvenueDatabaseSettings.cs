using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace makeupAvenue.Models
{
    public class MakeUpAvenueDatabaseSettings : IMakeUpAvenueDatabaseSettings
    {
        public string UsersCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

     public interface IMakeUpAvenueDatabaseSettings
    {
        string UsersCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
