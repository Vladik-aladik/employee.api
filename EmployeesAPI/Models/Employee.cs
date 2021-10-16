using Microsoft.AspNetCore.Mvc;
using System;
using System.ComponentModel.DataAnnotations;

namespace EmployeesAPI.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }

        [Required]
        [MinLength(2)]
        [MaxLength(30)]
        public string Name { get; set; }
        [Required]
        [MinLength(2)]
        [MaxLength(30)]
        public string Surname { get; set; }
        [Required]
        [MinLength(2)]
        [MaxLength(50)]
        public string JobTitle { get; set; }
        [Required]
        public DateTime CreatedAt { get; set;  }
        [Required]
        [Range(minimum: 100000000000, maximum: 999999999999)]
        public long PhoneNumber { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public Employee()
        {
            CreatedAt = DateTime.Now;
        }

    }
    
}
