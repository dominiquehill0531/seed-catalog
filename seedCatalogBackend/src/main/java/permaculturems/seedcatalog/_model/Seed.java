package permaculturems.seedcatalog._model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Seed {

    private Plant plantType;
    private String variety;
    private int quantity;

    public Seed() {}

    //G&S&=

}