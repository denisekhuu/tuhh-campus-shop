class UserRouter:
    """
    A router to control all database operations on models in the
    User application.
    """
    def db_for_read(self, model, **hints):
        """
        Attempts to read User models go to User.
        """
        if model._meta.app_label == 'User':
            return 'user'
        return None

    def db_for_write(self, model, **hints):
        """
        Attempts to write User models go to User.
        """
        if model._meta.app_label == 'User':
            return 'user'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        """
        Allow relations if a model in the User app is involved.
        
        if obj1._meta.app_label == 'User' or \
           obj2._meta.app_label == 'User':
           return True
        return None
        """
        return True
    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        Make sure the User app only appears in the 'User'
        database.
        """
        if app_label == 'User':
            return db == 'user'
        return None