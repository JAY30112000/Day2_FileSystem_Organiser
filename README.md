# File System Organiser (command line functions)
Implements some of the command line functions.

List of All the commands:  

                             peppy tree "directoryPath" 
                             
                            
                             peppy organize "directoryPath"
                             
                            
                             peppy help
                             
                             
                             peppy wcat "filenames"
                                        options: 
                                                -s : replaces more than one continous empty lines with only one.
                                                -b : gives numbering to the non empty lines (not used with -n).
                                                -n : gives numbering to all the lines (not used with -b).
                                                >  : writes(overrides) content of files on the left(after concatinating data) to the file on the right(if not present creates it).
                                                >> : append content of files on the left(after concatinating data) to the file on the right(if not present creates it).
