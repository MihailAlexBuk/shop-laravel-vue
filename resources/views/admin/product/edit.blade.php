@extends('admin.main.index')

@section('content')
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Редактирование продукта</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
                        <li class="breadcrumb-item"><a href="{{route('categories.index')}}">Продукта</a></li>
                        <li class="breadcrumb-item active">Редактирование продукта</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content col-7">
        <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <div class="row">

                <form action="{{route('products.update', $product->id)}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PATCH')
                    <div class="form-group">
                        <label for="exampleInputEmail1">Наимановение</label>
                        <input type="text" class="form-control" name="title" id="exampleInputEmail1" value="{{$product->title}}">
                    </div>
                    <div class="form-group">
                        <label for="summernote">Описание</label>
                        <textarea name="desc" id="summernote" >{{$product->desc}}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Вес</label>
                        <input type="text" class="form-control" name="size" id="exampleInputEmail1" value="{{$product->size}}">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Цена продукта</label>
                        <input type="text" class="form-control" name="price" id="exampleInputEmail1" value="{{$product->price}}">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Скидка</label>
                        <input type="text" class="form-control" name="discount" id="exampleInputEmail1" value="{{$product->discount}}">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputFile">Изменить превью</label>
                        <div class="w-50 m-2">
                            <img src="{{ Storage::url( $product->product_image_1) }}" alt="preview_image" class="w-50">
                        </div>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" name="product_image_1">
                                <label class="custom-file-label">Выберете изображение</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputFile">Изменить дополнительные изображения</label>
                        <div class="w-50 m-2">
                            <img src="{{ Storage::url( $product->product_image_2) }}" alt="preview_image" class="w-50">
                        </div>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" name="product_image_2">
                                <label class="custom-file-label">Выберете изображение</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="w-50 m-2">
                            <img src="{{ Storage::url( $product->product_image_3) }}" alt="preview_image" class="w-50">
                        </div>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" name="product_image_3">
                                <label class="custom-file-label">Выберете изображение</label>
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
                        <input type="submit" class="btn btn-primary" value="Обновить">
                    </div>
                </form>

            </div>
            <!-- ./col -->
        </div>
        <!-- /.row -->

        </div><!-- /.container-fluid -->
    </section>
@endsection
