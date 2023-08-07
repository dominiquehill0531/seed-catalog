package permaculturems.seedcatalog._repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import permaculturems.seedcatalog._model.Plant;

@Repository
public interface PlantRepo extends MongoRepository<Plant, String> {
    
    @Query("{name: '?0'}")
    Plant findByName(String name);

    @Query(value = "{layer: '?0'}", fields = "{'name': 1, 'periodicity': 1}")
    Iterable<Plant> findByLayer(String layer);

    @Query(value = "{periodicity: '?0'}", fields = "{'name': 1, 'layer': 1}")
    Iterable<Plant> findByPeriodicity(String period);

    public long count();

}
