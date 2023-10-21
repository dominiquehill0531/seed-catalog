package permaculturems.seedcatalog._controller;

import java.util.List;

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
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true", maxAge = 3600)
@RequestMapping("/api/plants")
public class PlantController {
    
    @Autowired
    private PlantRepo plantRepo;

    @PostMapping("/create")
    public ResponseEntity<?> createPlant(@RequestBody Plant newPlant) {
        if (!plantRepo.existsById(newPlant.getName())) {
            try {
                plantRepo.save(newPlant);
            } catch (Exception e) {
                return ResponseEntity.badRequest().body(e.getMessage());
            }
        } else {
            return ResponseEntity.badRequest().body(new Error("Plant already exists in database."));
        }
        return ResponseEntity.ok().body(newPlant);
    }

    @GetMapping("/plantList")
    public ResponseEntity<?> getPlantList() {
        List<Plant> plantList = plantRepo.findAll();
        ResponseEntity<?> x = (plantList.isEmpty()) ? ResponseEntity.ok().body("No plants are saved") : ResponseEntity.ok().body(plantList);
        return x;
    }

}
