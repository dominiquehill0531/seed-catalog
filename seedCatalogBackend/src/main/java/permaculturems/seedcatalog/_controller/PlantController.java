package permaculturems.seedcatalog._controller;

import javax.validation.Valid;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import permaculturems.seedcatalog._model.Plant;
import permaculturems.seedcatalog._repository.PlantRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/api/plants")
public class PlantController {
    
    @Autowired
    private PlantRepo plantRepo;

    @CrossOrigin(allowCredentials = "true")
    public ResponseEntity<?> savePlant(@RequestBody Plant newPlant) {
        
        
        plantRepo.insert(newPlant);
    }
    



}
