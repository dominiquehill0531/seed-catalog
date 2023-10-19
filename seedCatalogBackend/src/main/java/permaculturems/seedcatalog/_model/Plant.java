package permaculturems.seedcatalog._model;

import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

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

    // Getters & Setters


    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getLayer() {
        return layer;
    }
    public void setLayer(String layer) {
        this.layer = layer;
    }

    public String getPeriodicity() {
        return periodicity;
    }
    public void setPeriodicity(String periodicity) {
        this.periodicity = periodicity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Plant)) return false;
        Plant plant = (Plant) o;
        return getName().equals(plant.getName()) && getLayer().equals(plant.getLayer());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getName(), getLayer());
    }
}