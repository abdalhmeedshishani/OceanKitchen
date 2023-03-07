using Microsoft.AspNetCore.Mvc;
using OceanRestaurant.Api.Helpers.ImageUploader;
using OceanRestaurant.Dtos.Uploaders;
using System.Net.Http.Headers;

namespace OceanRestaurant.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly IImageUploader _fileUploader;

        public UploadController(IImageUploader fileUploader)
        {
            _fileUploader = fileUploader;
        }

        [HttpPost, DisableRequestSizeLimit]
        public IActionResult Upload( IFormFile[] files)
        {
            if (files.Length > 0)
            {
                var imagesNames = _fileUploader.Upload(files);

                var villaImages = GetVillaImages(imagesNames);

                return Ok(villaImages);
            }
            else
            {
                return BadRequest();
            }
        }

        private List<UploaderImageDto> GetVillaImages(List<string> imagesNames)
        {
            var imagesNamesDtos = new List<UploaderImageDto>();

            foreach (var imageNames in imagesNames)
            {
                var villaImage = new UploaderImageDto();
                villaImage.Id = 0;
                villaImage.Name = imageNames;

                imagesNamesDtos.Add(villaImage);
            }

            return imagesNamesDtos;
        }
    }
}
