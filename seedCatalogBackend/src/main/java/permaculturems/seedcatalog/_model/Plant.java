package permaculturems.seedcatalog._model;

import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("plants")
@UniqueElements
public class Plant {

    @Id
    private String name;
    private String layer;
    private String periodicity;

    public Plant() {}
    public Plant(String aName, String aLayer, String aPeriod) {
        super();
        this.name = aName;
        this.layer = aLayer;
        this.periodicity = aPeriod;
    }

    //G&S&=

}