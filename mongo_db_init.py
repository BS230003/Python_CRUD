
from pymongo import MongoClient
import pprint

def readMongoDBRecord (what):
    client = MongoClient ("mongodb://localhost:27017")
    print ('readRecord: MongoDB connected')
    db = client["mydb"] # database
    studentList = db.students # collection

    print ('readRecord: Get Collection: ', studentList)

    #one_student = studentList.find_one({"name":what}) # get recor
    #pprint.pprint (one_student)
    #print (one_student['name'])

    all_students = studentList.find() # get all records
    #for xx in all_students:
    #    print ("init db " , xx['name'])
    # client.close ()
    print ('connection not closed ', all_students)
    return all_students

def addMongoDBRecord (name1, mark1):
    print ('add to MongoDB ')

    client = MongoClient ("mongodb://localhost:27017")
    db = client["mydb"] # database
    studentList = db.students # collection
    #print ('Get Collection: ', studentList)

    one_student = studentList.insert_one({"name":name1, "marks":mark1}) # get recor
    print ('record added')
    return

def deleteMongoDBRecord (name1):
    print ('delete from MongoDB ' + name1)

    client = MongoClient ("mongodb://localhost:27017")
    db = client["mydb"] # database
    studentList = db.students # collection
    #print ('Get Collection: ', studentList)

    one_student = studentList.delete_one({"name":name1}) # get recor
    print ('record deleted ', one_student)
    return

def updateMongoDBRecord (name1, imgDataStr1):
    print ('update MongoDB image for ' + name1)

    client = MongoClient ("mongodb://localhost:27017")
    db = client["mydb"] # database
    studentList = db.students # collection
    one_student = studentList.update_one({"name":name1}, {"$set" : {"imgDataStr":imgDataStr1}}) # set record new value
    print ('record updated ', one_student.upserted_id)
    return

#readRecord ('AD')
#readRecord ('AK')

# Created by Bahadur Singh singh.bahadur@gmail.com

