package permaculturems.seedcatalog._controller;

import javax.validation.Valid;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import permaculturems.seedcatalog._model.Plant;
import permaculturems.seedcatalog._repository.PlantRepo;

import java.util.HashMap;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true", maxAge = 3600)
@RequestMapping("/api/plants")
public class PlantController {
    
    @Autowired
    private PlantRepo plantRepo;

    public ResponseEntity<?> createPlant(@RequestBody Plant newPlant) {
        
        if (!plantRepo.existsById(newPlant.getName())) {
            plantRepo.save(newPlant);
        } else {
            return ResponseEntity.badRequest().body("Plant already exists in database.");
        }
        return ResponseEntity.ok().body(newPlant);

    }


}
