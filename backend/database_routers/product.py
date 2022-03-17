class ProductRouter:
    """
    A router to control all database operations on models in the
    Product application.
    """
    def db_for_read(self, model, **hints):
        """
        Attempts to read Product models go to Product.
        """
        if model._meta.app_label == 'Product':
            return 'default'
        return None

    def db_for_write(self, model, **hints):
        """
        Attempts to write Product models go to Product.
        """
        if model._meta.app_label == 'Product':
            return 'default'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        """
        Allow relations if a model in the Product app is involved.
        
        if obj1._meta.app_label == 'Product' or \
           obj2._meta.app_label == 'Product':
           return True
        return None
        """
        return True

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        Make sure the Product app only appears in the 'Product'
        database.
        """
        if app_label == 'Product':
            return db == 'default'
        return None