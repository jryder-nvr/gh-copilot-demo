using albums_api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Text.Json;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace albums_api.Controllers
{
    [Route("albums")]
    [ApiController]
    public class AlbumController : ControllerBase
    {
        // GET: api/album
        [HttpGet]
        public IActionResult Get()
        {
            var albums = Album.GetAll();

            return Ok(albums);
        }

        // GET api/<AlbumController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            //Validate the ID and then get the item that has a matching ID using the methods for the models in Album.cs
            var albums = Album.GetAll();
            var album = albums.FirstOrDefault(a => a.Id == id);
            if (album == null)
            {
                return NotFound(new { message = "Album not found" });
            }
            return Ok(album);
        }

        // Write me a function that will get the album with the highest price from all the albums in Album.cs
        [HttpGet("highest-price")]
        public IActionResult GetHighestPriceAlbum()
        {
            var albums = Album.GetAll();
            var highestPriceAlbum = albums.OrderByDescending(a => a.Price).FirstOrDefault();
            if (highestPriceAlbum == null)
            {
                return NotFound(new { message = "No albums found" });
            }
            return Ok(highestPriceAlbum);
        }

        //Write me a function that will get the album with the latest year from all the albums in Album.cs
        [HttpGet("latest-year")]
        public IActionResult GetLatestYearAlbum()
        {
            var albums = Album.GetAll();
            var latestYearAlbum = albums.OrderByDescending(a => a.Year).FirstOrDefault();
            if (latestYearAlbum == null)
            {
                return NotFound(new { message = "No albums found" });
            }
            return Ok(latestYearAlbum);
        }
    }
}
