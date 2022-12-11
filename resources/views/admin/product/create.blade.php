@extends('admin.main.index')

@section('content')
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Добавление продукта</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
                        <li class="breadcrumb-item"><a href="{{route('categories.index')}}">Продукты</a></li>
                        <li class="breadcrumb-item active">Добавление продукта</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <div class="row">

                <form action="{{route('products.store')}}" method="POST" class="" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <label for="exampleInputEmail1">Наимановение</label>
                        <input type="text" class="form-control" name="title" id="exampleInputEmail1" placeholder="Введите название продукта">
                    </div>
                    <div class="form-group">
                        <label for="summernote">Описание</label>
                        <textarea name="desc" id="summernote" value="{{old('desc')}}"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Вес</label>
                        <input type="text" class="form-control" name="size" id="exampleInputEmail1" placeholder="Введите вес продукта">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Цена продукта</label>
                        <input type="text" class="form-control" name="price" id="exampleInputEmail1" placeholder="Введите цену продукта">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Скидка</label>
                        <input type="text" class="form-control" name="discount" id="exampleInputEmail1" placeholder="Введите % скидки">
                    </div>
                    <div class="form-group ">
                        <label for="exampleInputFile">Превью</label>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" name="product_image_1" multiple class="custom-file-input" id="exampleInputFile">
                                <label class="custom-file-label" for="exampleInputFile">Выбрать файл</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group ">
                        <label for="exampleInputFile" >Доп. изображения</label>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" name="product_image_2" multiple class="custom-file-input" id="exampleInputFile">
                                <label class="custom-file-label" for="exampleInputFile">Выбрать файл</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group ">
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" name="product_image_3" multiple class="custom-file-input" id="exampleInputFile">
                                <label class="custom-file-label" for="exampleInputFile">Выбрать файл</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Выберете категорию</label>
                        <select name="category_id" class="form-control">
                            @foreach($categories as $category)
                                <option value="{{$category->id}}" {{ $category->id == old('category_id') ? 'selected':''}}>{{$category->title}}</option>
                            @endforeach
                        </select>
                        @error('category_id')
                        <div class="text-danger">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label>Выберете тэги</label>
                        <select class="select2" name="tag_ids[]" multiple="multiple" data-placeholder="Выберите тэги" style="width: 100%;">
                            @foreach($tags as $tag)
                                <option {{ is_array(old('tag_ids')) && in_array($tag->id, old('tag_ids')) ? 'selected' : '' }} value="{{$tag->id}}">{{$tag->title}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Добавить">
                    </div>

                </form>

            </div>
            <!-- ./col -->
        </div>
        <!-- /.row -->

        </div><!-- /.container-fluid -->
    </section>
@endsection
